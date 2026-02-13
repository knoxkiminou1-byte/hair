"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  date: z.string().min(1, "Select a preferred date"),
  time: z.string().min(1, "Select a preferred time"),
  notes: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export function BookForm() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);
  const [toast, setToast] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    setSubmitted(values);
    setToast(true);
    setTimeout(() => setToast(false), 2600);
    reset();
  };

  return (
    <div className="space-y-4">
      {toast && (
        <div className="rounded-md border border-pink-200 bg-pink-50 p-3 text-sm" role="status" aria-live="polite">
          Booking request sent successfully.
        </div>
      )}
      <Card>
        <h2 className="text-xl font-semibold">Booking Request Form</h2>
        <form className="mt-4 grid gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <Input aria-label="Full name" placeholder="Full name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>}
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <Input aria-label="Email" type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>}
            </div>
            <div>
              <Input aria-label="Phone" placeholder="Phone" {...register("phone")} />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>}
            </div>
          </div>
          <div>
            <Select aria-label="Service" defaultValue="" {...register("service")}>
              <option value="" disabled>
                Select service
              </option>
              <option>New Client Consultation</option>
              <option>Starter Locs</option>
              <option>Wash + Retwist</option>
              <option>Microloc Retighten</option>
              <option>Treatment Add On</option>
            </Select>
            {errors.service && <p className="mt-1 text-xs text-rose-600">{errors.service.message}</p>}
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <Input aria-label="Preferred date" type="date" {...register("date")} />
              {errors.date && <p className="mt-1 text-xs text-rose-600">{errors.date.message}</p>}
            </div>
            <div>
              <Input aria-label="Preferred time" type="time" {...register("time")} />
              {errors.time && <p className="mt-1 text-xs text-rose-600">{errors.time.message}</p>}
            </div>
          </div>
          <Textarea aria-label="Notes" placeholder="Notes (optional)" {...register("notes")} />
          <Button type="submit">Send Request</Button>
        </form>
      </Card>

      {submitted && (
        <Card className="border-pink-200 bg-pink-50/70">
          <h3 className="flex items-center gap-2 font-semibold"><CheckCircle2 className="h-4 w-4" />Request Confirmed</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Thanks {submitted.name}! We&apos;ll contact you at {submitted.email} to confirm your {submitted.service} request.
          </p>
        </Card>
      )}
    </div>
  );
}

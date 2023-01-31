import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

export function ContactUs() {
  const schema = z
    .object({
      name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      }),
      email: z.string().email(),
      phone_number: z.string(),
    })
    .required({
      name: true,
      email: true,
      phone_number: true,
    })
    .strict();

  type Form = z.infer<typeof schema>;

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone_number: "",
  });

  const [captcha, setCaptcha] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="grid sm:grid-cols-2">
      <div className="showcase text-white bg-[crimson]">
        <h3 className="heading">
          Practice makes perfect. Improve your skills easily.
        </h3>
      </div>

      <div className="grid showcase auto-rows-max gap-14 bg-[whitesmoke]">
        <h2 className="heading">Contact Us</h2>

        <form className="grid gap-10 auto-rows-max" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="py-2 bg-transparent border-b outline-none"
            value={form.name}
            aria-required
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="py-2 bg-transparent border-b outline-none"
            value={form.email}
            aria-required
            required
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            onChange={handleChange}
            className="py-2 bg-transparent border-b outline-none"
            value={form.phone_number}
            aria-required
            required
          />

          <figure className="w-full h-10">
            <figcaption>Solve Captcha</figcaption>
          </figure>

          <div className="grid gap-2">
            <label htmlFor="captcha-input">Enter Captcha Here :</label>
            <input
              type="text"
              id="captcha-input"
              name="captcha"
              onChange={(e) => setCaptcha(e.currentTarget.value)}
              className="px-2 py-3 bg-transparent border outline-none"
              value={captcha}
            />
          </div>

          <button
            type="submit"
            className="bg-midnight-blue px-8 py-3.5 max-content text-white justify-self-start"
          >
            Get it now
          </button>
        </form>
      </div>
    </section>
  );
}

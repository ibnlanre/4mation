import Head from "next/head";
import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

export default function ContactUs() {
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
    <div className="grid gap-6 container font-light py-28 clump:py-[clamp(3rem,8vw,7rem)]">
      <Head>
        <title>Contact Us - 4mation</title>
      </Head>
      <header className="grid gap-3 sm:justify-items-center">
        <h2 className="heading">Get in touch</h2>
        <hr className="border-t-4 border-t-midnight-blue w-9" />
      </header>
      <address className="grid gap-3 not-italic sm:text-center sm:max-w-xl sm:mx-auto">
        <p>
          Block B2, Plot 129 - 132, Trans-Amadi Industrial Layout Trans-Amadi
          Facilities Limited (Former Michelin yard) Port Harcourt, Rivers State,
          Nigeria.
        </p>
        <p>
          <a href="+2348086203699">+234 808 620 3699</a>,{" "}
          <a href="tel:+2348086630375">+234 808 663 0375</a>
        </p>
        <p>Mon. - Sat. 8:00am - 6:00pm</p>
      </address>

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

        <figure>
          <figcaption>Solve Captcha*</figcaption>
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
          Send
        </button>
      </form>
    </div>
  );
}

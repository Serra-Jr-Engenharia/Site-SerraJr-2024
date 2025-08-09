import React, { useState } from "react";
import Banner from "./Components/Banner";

import agenda from "../../Assets/Contact/agenda.svg";
import email from "../../Assets/Contact/email.svg";
import telefone from "../../Assets/Contact/telefone.svg";
import localizacao from "../../Assets/Contact/localizacao.svg";
import emailjs from "@emailjs/browser";

import {
  Content,
  FormContainer,
  InformationContainer,
  Input,
  Button,
  Textarea,
  InformationCont,
  InformationImg,
  InformationText,
  Container,
  Form,
} from "./style";
import Slider from "../../Components/Slider";
import Mapa from "./Components/Map/index";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// valida presença de envs em dev
function requireEnv(key: string): string {
  const val = (import.meta as any).env?.[key];
  if (!val) throw new Error(`Variável de ambiente ausente: ${key}`);
  return val;
}

const SERVICE_ID = requireEnv("VITE_EMAILJS_SERVICE_ID");
const TEMPLATE_ID = requireEnv("VITE_EMAILJS_TEMPLATE_ID");
const PUBLIC_KEY = requireEnv("VITE_EMAILJS_PUBLIC_KEY");

const DATA = [
  {
    image: localizacao,
    text: "Rua Bonfim n°25 - Vila Amelia, Nova Friburgo - RJ, 28625-570",
  },
  {
    image: telefone,
    text: "(22) 2533-2265",
  },
  {
    image: email,
    text: "serrajr@iprj.uerj.br",
  },
  {
    image: agenda,
    text: "Horário de atendimento: Segunda a Sexta, das 09hrs às 17hrs.",
  },
];

const Contato: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const errors: Partial<FormValues> = {};

    if (!formValues.name.trim()) {
      errors.name = "O nome é obrigatório.";
    }

    if (!formValues.email.trim()) {
      errors.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = "Digite um e-mail válido.";
    }

    const onlyDigits = formValues.phone.replace(/\D/g, "");
    if (!onlyDigits) {
      errors.phone = "O telefone é obrigatório.";
    } else if (!/^\d{10,11}$/.test(onlyDigits)) {
      errors.phone = "Digite um telefone válido (somente números).";
    }

    if (!formValues.message.trim()) {
      errors.message = "A mensagem é obrigatória.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;

    setSending(true);

    const templateParams = {
      name: formValues.name,
      time: new Date().toLocaleString("pt-BR"),
      cellphone: formValues.phone.replace(/\D/g, ""),
      message: formValues.message,
      reply_to: formValues.email,
      email: formValues.email,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      setFormValues({ name: "", email: "", phone: "", message: "" });
      alert("Email enviado com sucesso");
    } catch (err: any) {
      console.error("EmailJS error:", err);
      const msg = err?.text || err?.message || "Ocorreu um erro desconhecido.";
      alert(`Erro ao enviar email: ${msg}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <Content>
      <Banner />
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nome Completo"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span style={{ color: "red" }}>{formErrors.name}</span>
            )}

            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span style={{ color: "red" }}>{formErrors.email}</span>
            )}

            <Input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formValues.phone}
              onChange={handleChange}
            />
            {formErrors.phone && (
              <span style={{ color: "red" }}>{formErrors.phone}</span>
            )}

            <Textarea
              name="message"
              placeholder="Mensagem"
              rows={1}
              value={formValues.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <span style={{ color: "red" }}>{formErrors.message}</span>
            )}

            <Button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar"}
            </Button>
          </Form>
        </FormContainer>

        <InformationContainer>
          {DATA.map((data, idx) => (
            <InformationCont key={idx}>
              <InformationImg src={data.image} />
              <InformationText>{data.text}</InformationText>
            </InformationCont>
          ))}
        </InformationContainer>
      </Container>
      <Mapa />
      <Slider />
    </Content>
  );
};

export default Contato;

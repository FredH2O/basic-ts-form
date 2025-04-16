import Form from "../components/Form";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header
        img={{ src: "/images/form-logo.png", alt: "Form Logo" }}
        title="Form Survey"
      />
      <main>
        <Form />
      </main>
      <footer></footer>
    </div>
  );
}

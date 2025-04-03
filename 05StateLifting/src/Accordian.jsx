import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <AccordionItem
        title="Section 1"
        content="This is the content of section 1."
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      />
      <AccordionItem
        title="Section 2"
        content="This is the content of section 2."
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      />
      <AccordionItem
        title="Section 3"
        content="This is the content of section 3."
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      />
    </div>
  );
}

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border p-5 m-3 ">
      <div className="accordion-header p-3 bg-blue-200" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="accordion-content bg-gray-300 p-3">{content}</div>}
    </div>
  );
}

export default Accordion;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      title: 'Is there support?',
      content: `Yes. You can email contact@l9studios.com and we'll answer ASAP!`,
    },
    {
      title: 'Which Unity versions are supported?',
      content: `2018.3.9 or higher. Need a specific version? Get in contact at contact@l9studios.com`,
    },
  ]
  return (
    <div className="w-full p-8">
      <h2 className="text-3xl font-semibold underline">FAQs</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.title} value={`item-${index}`}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent>{faq.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

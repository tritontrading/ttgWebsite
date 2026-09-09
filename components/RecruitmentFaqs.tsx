import { recruitment } from "@/lib/content";
import { EditorialSection } from "@/components/editorial/PageSections";

export function RecruitmentFaqs() {
  return (
    <EditorialSection id="faqs">
      <h2 className="section-block-gap font-heading text-3xl font-normal leading-[1.05] text-heading md:text-4xl">
        {recruitment.faqs.title}
      </h2>

      <dl className="max-w-3xl divide-y divide-border">
        {recruitment.faqs.items.map((faq) => (
          <div key={faq.question} className="py-8 first:pt-0 last:pb-0">
            <dt className="font-heading text-lg font-normal text-heading md:text-xl">{faq.question}</dt>
            <dd className="mt-4 text-base leading-loose text-text/75">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </EditorialSection>
  );
}

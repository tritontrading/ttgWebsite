import { recruitment } from "@/lib/content";
import { SectionShell } from "@/components/ui/primitives";

export function RecruitmentTimeline() {
  const { schedule } = recruitment;

  return (
    <SectionShell id="recruitment-schedule" className="bg-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-sans text-3xl font-bold uppercase tracking-tight text-heading md:mb-14 md:text-4xl">
          {schedule.title}
        </h2>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {schedule.events.map((event, index) => (
            <article
              key={event.title}
              className={`pb-8 lg:pb-0 ${
                index > 0
                  ? "border-t border-border pt-7 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-5"
                  : ""
              } ${index % 2 === 1 ? "sm:border-l sm:pl-5" : ""} ${
                index === 1 ? "sm:border-t-0 sm:pt-0" : ""
              }`}
            >
              <p className="mb-5 font-sans text-sm font-bold uppercase leading-tight text-heading">
                {event.date}
              </p>
              <h3 className="font-heading text-xl font-bold leading-tight text-heading">
                {event.title}
                {"qualifier" in event && event.qualifier && (
                  <span className="block">[{event.qualifier}]</span>
                )}
              </h3>
              <p className="mt-3 text-base leading-snug text-text">{event.details}</p>
              {"note" in event && typeof event.note === "string" && event.note && (
                <p className="mt-7 font-sans text-base font-bold leading-snug text-heading">
                  {event.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8 text-center text-sm leading-snug text-text sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <address className="not-italic">
            <p className="font-bold text-heading">Recruitment Questions? Contact us:</p>
            <a className="hover:underline" href="mailto:tritontrading@tritontradinggroup.org">
              tritontrading@tritontradinggroup.org
            </a>
          </address>
          <p>
            Website:{" "}
            <a className="hover:underline" href="https://tritontradinggroup.org">
              tritontradinggroup.org
            </a>
            <br />
            LinkedIn:{" "}
            <a
              className="hover:underline"
              href="https://www.linkedin.com/company/tritontradinggroup"
            >
              @tritontradinggroup
            </a>
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

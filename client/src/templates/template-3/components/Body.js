import Education from "./Education";

export default function Body({ data }) {
  return (
    <section className="flex">
      <section className="mt-6">
        <p className="text-[40px] font-bold ml-[102px]">EDUCATION</p>
        <Education data={data} />
      </section>
      <section></section>
    </section>
  );
}

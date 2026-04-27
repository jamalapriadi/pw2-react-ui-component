import Button from "../components/ui/Button";
import SpeakerCard from "../components/ui/SpeakerCard";

export default function Seminar() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center "
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-800 text-5xl font-bold">IT Seminar</h1>
          <h2 className="text-4xl text-red-800">
            "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
            Kompetitif"
          </h2>
          <p>
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis.Yang bertujuan mengubah paradigma dari
            persaingan menjadi kolaborasi, serta meningkatkan pengetahuan
            peserta dalam merancang teknologi AI yang berpusat pada manusia.
          </p>

          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt=""
          />
        </div>
      </section>

      <section id="speaker" className="py-24">
        <h2 className="text-red-800 text-5xl text-center mb-6">
          Temui Pembicara Khusus Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              role={speaker.role}
              imageUrl={speaker.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

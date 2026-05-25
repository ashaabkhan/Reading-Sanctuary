import { ArrowDown } from "lucide-react";
import ImageCard from "../components/ImageCard";

const beforeImage = {
  src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/9e26f2ece_923B30E0-922E-4DE9-920E-C397EE2FF00C.jpg",
  title: "The Blank Canvas",
  category: "Before",
};

const wireDrawings = [
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/3f5047191_ChatGPTImageMay25202612_45_26AM.png",
    title: "Design Specifications",
    category: "Technical",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/6ab23ea86_ChatGPTImageMay25202612_45_24AM.png",
    title: "Elevation Drawing",
    category: "Technical",
  },
];

const designConcepts = [
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/52c503567_ChatGPTImageMay25202612_44_34AM.png",
    title: "Round Arch Sanctuary",
    category: "Design 1",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/41cd52897_ChatGPTImageMay25202612_44_55AM.png",
    title: "Open Arch Collection",
    category: "Design 2",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/78aadd7f0_ChatGPTImageMay25202612_44_51AM.png",
    title: "Curved Arch Design",
    category: "Design 3",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/b40c572cb_ChatGPTImageMay25202612_44_44AM.png",
    title: "Moorish Arch Style",
    category: "Design 4",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/f98605122_ChatGPTImageMay25202612_44_23AM3.png",
    title: "Top View Layout",
    category: "Design 5",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/1e4d13533_ChatGPTImageMay25202612_44_23AM1.png",
    title: "Front Elevation View",
    category: "Design 6",
  },
  {
    src: "https://media.base44.com/images/public/6a13ca741360aad9c9d12113/d6e8fc779_ChatGPTImageMay25202612_44_23AM2.png",
    title: "Side Elevation Detail",
    category: "Design 7",
  },
];

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero */}
      <section className='relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20'>
        <h1 className='text-2xl md:text-4xl font-light tracking-tight text-foreground leading-tight max-w-3xl'>
          <span className='block text-4xl md:text-6xl font-normal'>
            Hi Ramizah,
          </span>
          <span className='block mt-2'>
            This is your personalized design showcase for your very own{" "}
            <span className='italic font-normal'>Reading Sanctuary</span>
          </span>
        </h1>
        <p className='mt-6 text-muted-foreground max-w-2xl text-sm md:text-base leading-7'>
          <span className='block'>
            I&apos;ve been working on this for a while now but forgot to bring
            it up because it wasnt saved on my phone, but i remembered it after
            you mentioned the book I made for you. So i quickly put this
            together to share the vision.{" "}
          </span>
          <span className='block mt-3'>
            These are a few design concepts I wanted to surprise you with, but
            wasnt sure when i&apos;ll get a chance to show them, so thought
            i&apos;d share them now.
          </span>
          <span className='block mt-3'>
            You can click any image to download the high-resolution version.
          </span>
        </p>
        <ArrowDown className='mt-10 h-4 w-4 text-muted-foreground animate-bounce' />
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-24 space-y-20'>
        {/* Before */}
        <div>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-light text-foreground mb-2'>
              The Beginning
            </h2>
            <p className='text-muted-foreground text-sm'>
              This is the space in the masterbed room, since the idea was we
              would live in pickering together, i wanted to transform this space
              so it becomes your own personal safe haven.{" "}
            </p>
          </div>
          <div className='max-w-2xl mx-auto'>
            <ImageCard image={beforeImage} />
          </div>
        </div>

        {/* Design Concepts */}
        <div>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-light text-foreground mb-2'>
              Design Concepts
            </h2>
            <p className='text-muted-foreground text-sm'>
              This are all concepts, and I would never finalize anything without
              your input. But here I was exploring different arch styles and
              configurations, and wanted to know if you liked any of these or if
              you had any other ideas in mind.
            </p>
          </div>
          <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4'>
            {designConcepts.map((d) => (
              <div key={d.title} className='break-inside-avoid'>
                <ImageCard image={d} />
              </div>
            ))}
          </div>
        </div>

        {/* Technical Wire Drawings */}
        <div>
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-light text-foreground mb-2'>
              Technical Details
            </h2>
            <p className='text-muted-foreground text-sm'>
              Architectural wire drawings and specifications; Rough estimations
              of dimensions and materials
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {wireDrawings.map((d) => (
              <ImageCard key={d.title} image={d} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

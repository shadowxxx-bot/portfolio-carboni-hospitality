export function About() {
  return <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-16 gap-6">
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
          <h2 className="text-4xl font-bold">About</h2>
          <div className="flex-1 h-0.5 bg-foreground/30 max-w-xs"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* My Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>My core education is in Quantum Science and Engineering at EPFL, where I am completing a Master's degree with a specialization in Quantum Information and Computing. Before this, I earned a Bachelor's in Microengineering at EPFL, giving me a solid foundation in mechanics, electronics, and systems engineering.</p>
              <p>Professionally, I worked as a teaching assistant and simulation developer at EPFL, creating educational tools for quantum mechanics concepts. Earlier, I gained experience as a student assistant tutoring in electromagnetism, analysis, electronics, and quantum science, and as a mentoring coach supporting first-year students. I also completed internships in machining and mechanism design at ETML, inventory management for the State of Geneva, and marketing at Vacheron Constantin in the UK.
            </p>
              <p>Beyond academics and work, I built resilience through rigorous project-based learning in quantum computing and machine learning, and nurtured analytical creativity by developing simulations for complex quantum systems, while strengthening leadership through mentoring roles at EPFL.
            </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Philosophy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>I hold the view that pursuing something in a partial manner is essentially equivalent to not pursuing it whatsoever. To me, true dedication involves seeing an endeavor all the way to completion, regardless of the challenges encountered. As I frequently express: "Once you've embarked on the initial stride, it's your duty to yourself to traverse the entire route."
            </p>
              <p>This perspective shapes my approach to tasks: characterized by resolve, accuracy, and a commitment to accountability. Be it in technical fields, investigative pursuits, or team efforts, I tackle difficulties with the assurance that credibility arises from steadfastness and dependability. Colleagues who've collaborated with me commonly note that their greatest appreciation lies not solely in the outcomes I produce, but in the steady reliability I maintain across every stage.</p>
              <p>Via this guiding principle, my goal is to offer more than mere technological answers—also building a level of assurance in any group I integrate with. Ultimately, the genuine evaluation of one's efforts rests not merely on the final product, but on the conviction that every possible exertion was invested in its achievement.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
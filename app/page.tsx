export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Designing Secure Systems Crafting meaningful visuals
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-600">
          I build secure, well-structured web applications and design clean,
          user-focused digital experiences.
        </p>
      </section>

      {/* Divider */}
      <div className="my-16 h-px bg-gray-200 max-w-4xl mx-auto" />

      {/* Focus Areas */}
      <section className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        
        {/* Cybersecurity */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-medium">
            Cybersecurity
          </h2>
          <p className="mt-3 text-gray-600">
            Practical security learning through projects, self-assessment,
            secure development practices, and ethical testing.
          </p>
        </div>

        {/* Design */}
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-medium">
            UI / UX Design
          </h2>
          <p className="mt-3 text-gray-600">
            Thoughtful interface design focused on clarity, usability,
            accessibility, and visual balance.
          </p>
        </div>

      </section>

    </main>
  );
}

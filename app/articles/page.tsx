export default function ArticlesPage() {
return ( <main className="max-w-5xl mx-auto px-6 py-20"> <h1 className="text-5xl mb-10">
Articles </h1>

  <div className="space-y-6">

    <a
      href="/articles/cinnamon-export-guide"
      className="block border p-6 rounded-xl"
    >
      Indonesian Cinnamon Export Guide
    </a>

    <a
      href="/articles/vanilla-bean-grades"
      className="block border p-6 rounded-xl"
    >
      Vanilla Bean Grades
    </a>

    <a
      href="/articles/export-quality-control-process"
      className="block border p-6 rounded-xl"
    >
      Export Quality Control Process
    </a>

    <a
      href="/articles/ceylon-vs-cassia-cinnamon"
      className="block border p-6 rounded-xl"
    >
      Ceylon Cinnamon vs Cassia Cinnamon
    </a>

  </div>
</main>

);
}
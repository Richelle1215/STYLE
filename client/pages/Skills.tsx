import Layout from "@/components/Layout";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "APIs", level: 90 },
      ],
    },
    {
      name: "Design & Tools",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Git", level: 90 },
        { name: "Problem Solving", level: 95 },
      ],
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Skills
          </h1>
          <p className="text-lg text-muted-foreground">
            Visual representation of skills with progress bars and icons
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.name} className="space-y-6 rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-bold text-foreground">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

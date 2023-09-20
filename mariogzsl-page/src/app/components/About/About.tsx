import { Label } from "../Label/Label";

export function About() {
    const clouds = [
        "Azure",
        "Vercel",
    ].sort();

    const frameworks = [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Pytorch",
    ].sort();

    const languages = [
        "TypeScript",
        "JavaScript",
        "Python",
        "C#",
        "C++",
        "CSS",
    ].sort();

    const technologies = clouds.concat(frameworks, languages).sort();
    const labels = technologies.map((technology, index) => {
        if(clouds.includes(technology)) {
            return (
                <Label type="cloud" key={index}>
                    {technology}
                </Label>
            );
        }else if(frameworks.includes(technology)) {
            return (
                <Label type="framework" key={index}>
                    {technology}
                </Label>
            );
        }else if(languages.includes(technology)) {
            return (
                <Label type="language" key={index}>
                    {technology}
                </Label>
            );
        }else{
            return (
                <Label type="other" key={index}>
                    {technology}
                </Label>
            );
        }
    });

    return (
        <>
            <div className="flex flex-col items-start justify-start w-full h-full my-8">
                <h2 className="font-extrabold text-2xl">Hi, it&apos;s Mario!</h2>
                <section className="flex flex-col items-start justify-start w-full h-full my-8 gap-3">
                    <p>I&apos;m a software engineer at <span className="font-bold">Microsoft</span>, and I love to build things with code. I grow up in Mexico City, and currently I live in Seattle, WA.</p>

                    <p>I&apos;m passionate about <span className="font-bold">web development</span>, <span className="font-bold">cloud computing</span>, <span className="font-bold">machine learning</span>, and <span className="font-bold">open source</span>.</p>

                    <div className="flex flex-wrap items-center justify-center w-full h-8 my-8 gap-2">
                        {
                            labels
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
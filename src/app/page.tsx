import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md text-slate-800 p-4 shadow-lg w-full z-50 border-b border-orange-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-orange-500 transition-colors duration-300 tracking-wider text-orange-600">
          🌟 梦想旅行
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-orange-500 transition-colors duration-300 font-medium">首页</Link>
          <Link href="/archive" className="hover:text-orange-500 transition-colors duration-300 font-medium">景点归档</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 text-slate-800 items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.3),rgba(251,191,36,0))]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-20 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-300 via-yellow-200 to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-600 via-yellow-600 to-pink-600 mb-6 drop-shadow-sm">
            探索世界美景
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto tracking-wide leading-relaxed">
            发现令人惊叹的旅行目的地，开启您的梦想之旅。每一个景点都是独特的体验。
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}

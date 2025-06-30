import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Travel destination image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-orange-100 text-orange-600 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full border border-orange-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
           <div className="font-medium text-orange-500 group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-1">
             🌟 探索景点 
             <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
       <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-200 via-yellow-200 to-pink-200 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out border border-orange-100 group-hover:border-orange-200">
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              {cardContent}
            </Link>
          ) : (
            <div className="flex flex-col h-full">{cardContent}</div>
          )}
        </div>
    </div>
  );
} 
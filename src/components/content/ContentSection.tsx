import Image from "next/image";

interface ContentSectionProps {
  title?: string;
  content: string | React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  className?: string;
}

export default function ContentSection({ 
  title, 
  content, 
  image, 
  className = "" 
}: ContentSectionProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      )}
      
      {image && (
        <div className="flex justify-center">
          <Image 
            src={image.src}
            alt={image.alt}
            width={image.width || 300}
            height={image.height || 200}
            className="rounded-lg"
          />
        </div>
      )}
      
      <div className="text-gray-700">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
}

interface IllustrationPlaceholderProps {
  title?: string;
  description?: string;
  className?: string;
}

export const IllustrationPlaceholder: React.FC<IllustrationPlaceholderProps> = ({ 
  title = "Doctor Illustration", 
  description = "Placeholder",
  className = "w-80 h-96 lg:w-96 lg:h-[500px]"
}) => {
  return (
    <div className={`${className} bg-white/20 rounded-3xl border-2 border-dashed border-gray-400 flex items-center justify-center`}>
      <div className="text-center p-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-gray-600 text-sm">
          {title}
          <br />
          {description}
        </p>
      </div>
    </div>
  );
};
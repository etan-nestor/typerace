export const ContentCard = ({ text, input }: { text: string; input: string }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-8 w-full h-full min-h-[300px] flex items-center shadow-xl">
      <div className="text-2xl lg:text-2xl leading-relaxed tracking-wide select-none text-justify font-mono w-full">
        {text.split('').map((char, index) => (
          <span 
            key={index} 
            className={
              index >= input.length ? 'text-gray-500' : 
              input[index] === char ? 'text-white' : 'text-red-400 underline'
            }
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-black/10 h-32 w-full flex justify-center">
      <div className="w-4/5 lg:w-3/5 text-left flex items-center">
        <p className="lg:text-md text-xs font-medium">
          Designed and built by Yanis Capelle
        </p>
        <p className="text-3xl mx-2">⸱</p>
        <Heart size={16} />
      </div>
    </div>
  );
}

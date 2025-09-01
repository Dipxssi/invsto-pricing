import PricingCard from './PricingCard';

export default function PricingComponent() {
  return (
    <div className="min-h-screen bg-[hsl(230,100%,99%)] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute top-0 left-0 w-full h-[400px] rounded-bl-[100px] z-0"
        style={{
          background: 'url(/images/bg-pattern.svg) no-repeat center top',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Circles Pattern */}
      <div 
        className="absolute top-16 right-8 w-32 h-32 opacity-60"
        style={{
          backgroundImage: 'url(/images/pattern-circles.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-[hsl(227,35%,25%)] mb-4">
            Simple, traffic-based pricing
          </h1>
          <p className="text-[hsl(225,20%,60%)] max-w-md mx-auto">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <PricingCard />
      </div>
    </div>
  );
}

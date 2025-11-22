import React, { useState, useEffect } from 'react';
import { Button } from './UI';
import { User, Phone, Mail, ArrowRight, ArrowLeft, CheckCircle, Droplets, Shield, AlertTriangle, Trees } from 'lucide-react';

interface QuizData {
  poolSize: number;
  isScreened: boolean | null;
  condition: 'clear' | 'cloudy' | 'green' | null;
  name: string;
  phone: string;
  email: string;
}

export const InspectionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuizData>({
    poolSize: 20000,
    isScreened: null,
    condition: null,
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommendation, setRecommendation] = useState<{ title: string; reason: string } | null>(null);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const updateData = (key: keyof QuizData, value: any) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  // Logic to determine recommendation
  useEffect(() => {
    if (step === 4) {
      let title = "Weekly Maintenance Plan";
      let reason = "Based on your inputs, this provides the most consistent care.";

      if (data.condition === 'green') {
        title = "Green-to-Clean + Weekly Service";
        reason = "Your pool needs a specialized recovery treatment first, followed by consistent weekly care to prevent algae return.";
      } else if (data.isScreened === true && data.condition === 'clear') {
        title = "Bi-Weekly Maintenance Plan";
        reason = "Since your pool is screened and currently clear, our cost-effective Bi-Weekly plan is a great fit!";
      } else if (data.isScreened === false) {
        title = "Weekly Maintenance Plan";
        reason = "Open pools in our area accumulate pollen and debris quickly. Weekly visits ensure your chemicals and filters stay ahead of the mess.";
      }

      setRecommendation({ title, reason });
    }
  }, [step, data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setStep(5);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-32 relative z-10 mt-[-80px] md:mt-[-120px]" id="quote">
       <div className="max-w-4xl mx-auto px-4 relative">
         
         <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-none mb-4 md:mb-6">
              Get Your Pool Quote In <span className="text-[#06b6d4] underline decoration-[#06b6d4] decoration-4 md:decoration-8 underline-offset-4">60 Seconds</span>
            </h2>
            <p className="text-slate-600 font-bold text-lg md:text-xl max-w-2xl mx-auto">Answer a few quick questions to find your perfect pool plan.</p>
         </div>

         <div className="bg-white rounded-3xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-2 md:border-4 border-white overflow-hidden min-h-[400px] md:min-h-[500px] relative flex flex-col">
            
            {/* Progress Bar */}
            {step < 5 && (
                <div className="w-full h-2 md:h-3 bg-slate-100">
                    <div 
                        className="h-full bg-[#06b6d4] transition-all duration-500 ease-out"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>
            )}

            <div className="flex-grow p-6 md:p-16 flex flex-col justify-center items-center relative">
                
                {/* STEP 1: POOL SIZE */}
                {step === 1 && (
                    <div className="w-full max-w-2xl animate-in fade-in slide-in-from-right-8 duration-300">
                        <h3 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-10 text-slate-900">Estimated Pool Size</h3>
                        
                        <div className="bg-cyan-50/50 p-6 md:p-10 rounded-2xl border-2 border-cyan-100 mb-8 md:mb-10">
                            <div className="text-center mb-6">
                                <span className="text-4xl md:text-5xl font-black text-[#06b6d4]">{data.poolSize.toLocaleString()}</span>
                                <span className="text-slate-600 font-bold ml-2 md:ml-3 text-lg md:text-xl">gallons</span>
                            </div>
                            <input 
                                type="range" 
                                min="5000" 
                                max="50000" 
                                step="1000" 
                                value={data.poolSize} 
                                onChange={(e) => updateData('poolSize', parseInt(e.target.value))}
                                className="w-full h-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#06b6d4]"
                            />
                             <div className="flex justify-between text-xs md:text-sm font-bold text-slate-400 mt-4">
                                <span>Small</span>
                                <span>Medium</span>
                                <span>Large</span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-10 flex-wrap">
                            <button onClick={() => updateData('poolSize', 10000)} className="px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold text-sm md:text-base hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors">Small (~10k)</button>
                            <button onClick={() => updateData('poolSize', 20000)} className="px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold text-sm md:text-base hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors">Medium (~20k)</button>
                            <button onClick={() => updateData('poolSize', 35000)} className="px-4 py-2 md:px-6 md:py-3 rounded-full border-2 border-slate-200 text-slate-600 font-bold text-sm md:text-base hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors">Large (35k+)</button>
                        </div>

                        <div className="text-center">
                            <Button onClick={handleNext} className="w-full md:w-auto px-16 py-5 md:py-6 text-xl shadow-xl">Next Step <ArrowRight size={20} className="ml-2"/></Button>
                        </div>
                    </div>
                )}

                {/* STEP 2: ENVIRONMENT */}
                {step === 2 && (
                     <div className="w-full max-w-2xl animate-in fade-in slide-in-from-right-8 duration-300 text-center">
                        <Button variant="white" className="mb-8 md:mb-10 mx-auto pointer-events-none shadow-none bg-transparent border-none text-slate-400 hover:bg-transparent" onClick={handleBack}><ArrowLeft size={18} className="mr-2"/> Back</Button>
                        
                        <h3 className="text-2xl md:text-3xl font-black text-center mb-3 text-slate-900">Is your pool screened in?</h3>
                        <p className="text-slate-600 font-medium text-base md:text-lg mb-8 md:mb-10">This helps us determine debris load.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                            <button 
                                onClick={() => { updateData('isScreened', true); handleNext(); }}
                                className="group border-[3px] border-slate-100 p-6 md:p-10 rounded-2xl hover:border-[#06b6d4] hover:shadow-2xl transition-all text-left flex items-center md:block gap-4 md:gap-0"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-50 text-[#06b6d4] rounded-full flex items-center justify-center md:mb-6 group-hover:bg-[#06b6d4] group-hover:text-white transition-colors shrink-0">
                                    <Shield size={24} className="md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg md:text-xl text-slate-900 mb-1 md:mb-2">Yes, Screened</h4>
                                    <p className="text-sm md:text-base text-slate-500 font-medium">Minimal debris, protected from leaves and bugs.</p>
                                </div>
                            </button>

                             <button 
                                onClick={() => { updateData('isScreened', false); handleNext(); }}
                                className="group border-[3px] border-slate-100 p-6 md:p-10 rounded-2xl hover:border-[#06b6d4] hover:shadow-2xl transition-all text-left flex items-center md:block gap-4 md:gap-0"
                            >
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-50 text-[#06b6d4] rounded-full flex items-center justify-center md:mb-6 group-hover:bg-[#06b6d4] group-hover:text-white transition-colors shrink-0">
                                    <Trees size={24} className="md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <h4 className="font-black text-lg md:text-xl text-slate-900 mb-1 md:mb-2">No, Open Air</h4>
                                    <p className="text-sm md:text-base text-slate-500 font-medium">Exposed to nature, pollen, leaves, and rain.</p>
                                </div>
                            </button>
                        </div>
                     </div>
                )}

                {/* STEP 3: CONDITION */}
                 {step === 3 && (
                     <div className="w-full max-w-3xl animate-in fade-in slide-in-from-right-8 duration-300 text-center">
                        <Button variant="white" className="mb-8 md:mb-10 mx-auto pointer-events-none shadow-none bg-transparent border-none text-slate-400 hover:bg-transparent" onClick={handleBack}><ArrowLeft size={18} className="mr-2"/> Back</Button>
                        
                        <h3 className="text-2xl md:text-3xl font-black text-center mb-3 text-slate-900">How's the water look?</h3>
                        <p className="text-slate-600 font-medium text-base md:text-lg mb-8 md:mb-10">Be honest, we don't judge!</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                            <button 
                                onClick={() => { updateData('condition', 'clear'); handleNext(); }}
                                className="group border-[3px] border-slate-100 p-6 md:p-8 rounded-2xl hover:border-[#06b6d4] hover:shadow-2xl transition-all flex items-center md:block gap-4 md:gap-0"
                            >
                                <div className="md:mx-auto w-12 h-12 md:w-14 md:h-14 bg-cyan-50 text-[#06b6d4] rounded-full flex items-center justify-center md:mb-6 group-hover:bg-[#06b6d4] group-hover:text-white transition-colors shrink-0">
                                    <Droplets size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h4 className="font-black text-lg text-slate-900">Crystal Clear</h4>
                            </button>

                             <button 
                                onClick={() => { updateData('condition', 'cloudy'); handleNext(); }}
                                className="group border-[3px] border-slate-100 p-6 md:p-8 rounded-2xl hover:border-[#06b6d4] hover:shadow-2xl transition-all flex items-center md:block gap-4 md:gap-0"
                            >
                                <div className="md:mx-auto w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center md:mb-6 group-hover:bg-slate-400 group-hover:text-white transition-colors shrink-0">
                                    <AlertTriangle size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h4 className="font-black text-lg text-slate-900">A Little Cloudy</h4>
                            </button>

                            <button 
                                onClick={() => { updateData('condition', 'green'); handleNext(); }}
                                className="group border-[3px] border-slate-100 p-6 md:p-8 rounded-2xl hover:border-green-500 hover:shadow-2xl transition-all flex items-center md:block gap-4 md:gap-0"
                            >
                                <div className="md:mx-auto w-12 h-12 md:w-14 md:h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center md:mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors shrink-0">
                                    <AlertTriangle size={24} className="md:w-7 md:h-7" />
                                </div>
                                <h4 className="font-black text-lg text-slate-900">Green / Swamp</h4>
                            </button>
                        </div>
                     </div>
                )}

                {/* STEP 4: CONTACT & RECOMMENDATION */}
                {step === 4 && recommendation && (
                    <div className="w-full max-w-3xl animate-in fade-in slide-in-from-right-8 duration-300">
                         <div className="bg-[#06b6d4]/10 border-2 border-[#06b6d4] p-6 md:p-8 rounded-xl mb-8 md:mb-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                            <div className="bg-[#06b6d4] text-white p-3 md:p-4 rounded-full shrink-0 shadow-lg">
                                <CheckCircle size={24} className="md:w-8 md:h-8" />
                            </div>
                            <div>
                                <h4 className="font-black text-xl md:text-2xl text-slate-900 mb-1 md:mb-2">Recommended: {recommendation.title}</h4>
                                <p className="text-sm md:text-base text-slate-700 font-bold">{recommendation.reason}</p>
                            </div>
                         </div>

                         <h3 className="text-2xl md:text-3xl font-black text-center mb-6 md:mb-8 text-slate-900">Where should we send your quote?</h3>
                         
                         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="relative">
                                <User className="absolute left-5 top-4 md:top-5 text-slate-400" size={24} />
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full pl-14 p-4 md:p-5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-base md:text-lg outline-none focus:ring-2 focus:ring-[#06b6d4] focus:bg-white transition-all placeholder:text-slate-400 text-slate-900"
                                    value={data.name}
                                    onChange={(e) => updateData('name', e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Phone className="absolute left-5 top-4 md:top-5 text-slate-400" size={24} />
                                <input 
                                    required 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    className="w-full pl-14 p-4 md:p-5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-base md:text-lg outline-none focus:ring-2 focus:ring-[#06b6d4] focus:bg-white transition-all placeholder:text-slate-400 text-slate-900"
                                    value={data.phone}
                                    onChange={(e) => updateData('phone', e.target.value)}
                                />
                            </div>
                            <div className="relative md:col-span-2">
                                <Mail className="absolute left-5 top-4 md:top-5 text-slate-400" size={24} />
                                <input 
                                    required 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="w-full pl-14 p-4 md:p-5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-base md:text-lg outline-none focus:ring-2 focus:ring-[#06b6d4] focus:bg-white transition-all placeholder:text-slate-400 text-slate-900"
                                    value={data.email}
                                    onChange={(e) => updateData('email', e.target.value)}
                                />
                            </div>
                            
                            <div className="md:col-span-2 mt-4 md:mt-6">
                                <Button type="submit" variant="primary" className="w-full py-5 md:py-6 text-xl shadow-xl font-black" disabled={isSubmitting}>
                                    {isSubmitting ? 'Calculating...' : 'Get My Price Now'}
                                </Button>
                                <button type="button" onClick={handleBack} className="w-full text-center mt-4 md:mt-6 text-slate-400 text-base font-bold hover:text-slate-600">Go Back</button>
                            </div>
                         </form>
                    </div>
                )}

                {/* STEP 5: SUCCESS */}
                {step === 5 && (
                     <div className="text-center animate-in zoom-in duration-300 py-8 md:py-12">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                            <CheckCircle size={40} className="md:w-12 md:h-12" strokeWidth={3} />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">You're All Set!</h3>
                        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg mx-auto mb-8 md:mb-10">
                            We've received your details. One of our ProActive specialists is reviewing your pool specs and will text you a custom quote shortly.
                        </p>
                        <Button variant="outline" onClick={() => { setStep(1); setData({...data, name: '', phone: '', email: ''})}} className="px-8 py-4">Start Over</Button>
                     </div>
                )}

            </div>
         </div>
       </div>
    </section>
  );
};
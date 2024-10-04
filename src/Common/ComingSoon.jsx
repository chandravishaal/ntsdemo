import { useScramble } from 'use-scramble';

const ComingSoon = () => {

    const { ref } = useScramble({
        text: 'Coming Soon',
        speed: 0.5,
        tick: 1,
        step: 1,
        scramble: 4,
        seed: 0,
      });

  return (
    <section className='lg:h-screen flex items-center justify-center'>
        <div>
            <h1 ref={ref} className='text-5xl lg:text-7xl font-montserrat font-bold text-center mt-72 md:mt-96 lg:mt-0 animate-gradient' />
        </div>
    </section>
  )
}

export default ComingSoon

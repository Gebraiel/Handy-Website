import React, { useContext, useEffect } from 'react'
import Section from '../ui/Section'
import { Link } from 'react-router-dom'
import Loader from '../ui/Loader';
import { useNavigation } from 'react-router-dom';
import OutletContext from '../context/OutletContext';

export default function Error({error}) {
  const navigation = useNavigation();
  const setRelative = useContext(OutletContext);
  useEffect(()=>{
      setRelative(true);
      return ()=>{
        setRelative(false);
      }
    },[])
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <Section>
      <div className='flex flex-col gap-5 items-center justify-center h-full'>
        <h1 className='text-5xl text-center text-secondary'>
            <p>
              {error.code}
            </p>
            {error.message}
        </h1>
        <Link to="/" className="text-lg border-2 transition-colors duration-300 border-primary bg-primary px-5 py-3 text-white hover:text-primary hover:bg-white font-bold">Go Home</Link>

      </div>
    </Section>
  )
}

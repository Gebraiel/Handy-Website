import React from 'react'
import { useNavigation } from 'react-router-dom';
import Loader from '../ui/Loader';

export default function Certificates() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <div>Certificates</div>
  )
}

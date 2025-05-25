import React from 'react';
import { useNavigation } from "react-router-dom";
import Loader from '../ui/Loader';

export default function MediaCenter() {
      const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>MediaCenter</div>
  )
}

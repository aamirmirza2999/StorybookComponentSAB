
import { useNavigation as originalUseNavigation } from '@react-navigation/native';

export const mockUseNavigation = () => {
 
  const useNavigation = () => ({
    goBack: () => console.log("Mocked goBack"),  // Mock goBack
    navigate: (destination) => console.log(`Mocked navigate to ${destination}`), // Mock navigate
    
  });

 
  require('@react-navigation/native').useNavigation = useNavigation;
};


export const restoreUseNavigation = () => {
  require('@react-navigation/native').useNavigation = originalUseNavigation;
};

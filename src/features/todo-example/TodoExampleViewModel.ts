import { useQuery } from '@tanstack/react-query';
import { getToDosExampleFromAPI } from './TodoExampleService';

export const useToDoExample = () => {
  return useQuery({
    queryKey: ['todosFromAPI'],
    queryFn: getToDosExampleFromAPI,
    // gcTime: 1000 * 60 * 60 * 24, //Remove Garbage Collection after 24 hours, Remove those data which is not used for 24 hours. Default is 0.
    // staleTime: 1000 * 60 * 60 * 24, //Stale Time after 24 Hrs, Data is fresh till 24 Hrs. fetch API data after 24 hours. Default is 0.
    // refetchInterval: 1000, // Refetch data every second, use for polling data from API
    // refetchIntervalInBackground: true, // Refetch data in the background
  });
};
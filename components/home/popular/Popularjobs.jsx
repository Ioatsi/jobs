import {useState} from 'react';
import { View, Text, TouchableOpacity,FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './popularjobs.style';
import { COLORS,SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoading } from 'expo-font';
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const router= useRouter();
  const { data, isLoading, error} = useFetch('search', {
    query: 'React Developer',
    page: '1',
    num_pages: '1'
  });
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress=(item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id)
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary}/>
        ) : error ? (
          <Text>Someting Wronmg</Text>
        ): (
          <FlatList 
            data={data}
            renderItem={({item}) => (
              <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs
import React, { Fragment, useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
  View
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('MySkills');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(currentSkills => [...currentSkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(currentSkills => currentSkills.filter(
      skill => skill.id !== id
    ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Night');
    }
  }, [])

  return (
    <Fragment>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.container}>

        <Text style={styles.title}>Welcome, Ana</Text>
        <Text style={styles.gretting}>{gretting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button
          onPress={handleAddNewSkill}
          text="Add"
        >

        </Button>

        <Text style={[styles.title, { marginVertical: 50 }]}>
          MySkills
        </Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)} 
            />
          )}
        />
        {/* <ScrollView showsHorizontalScrollIndicator={false}>
          {
            mySkills.map(skill => (
              <SkillCard key={skill} skill={skill} />
            ))

          }
        </ScrollView> */}
      </View>
    </Fragment >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  gretting: {
    color: '#fff',
    fontSize: 14,
    //fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  }
})

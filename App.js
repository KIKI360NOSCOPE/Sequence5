import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, FlatList } from 'react-native';
import tpList from './tp.json';

const Exo1 = () => {
  return (
    <View>
      <Text>Ma première application à la Manu</Text>
    </View>
  );
}

const Exo2 = () => {
  /* Afficher l'image rover.jpg.
  Cette image doit prendre les 3/4 de l'écran en largeur. Afficher à côté le texte : Le rover Opportunity */
  return (
    <View style={styles.container}>
      <Text>Le rover Opportunity</Text>
      <Image source={require('./assets/rover.jpg')} style={{ width: '75%', height: '75%' }} />
    </View>
  );
}

const Exo3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Le rover Opportunity</Text>
      <Image source={require('./assets/rover.jpg')} style={styles.roverStyle} />
    </View>
  );
}

const Exo4 = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/rover.jpg')} style={styles.roverStyle} />
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.txt}>
          Mars Exploration Rover (MER) est une mission double de la NASA lancée en 2003 et composée de deux robots mobiles ayant pour objectif d'étudier la géologie de la planète Mars et en particulier le rôle joué par l'eau dans l'histoire de la planète. Les deux robots ont été lancés au début de l'été 2003 et se sont posés en janvier 2004 sur deux sites martiens susceptibles d'avoir conservé des traces de l'action de l'eau dans leur sol. Chaque rover ou astromobile, piloté par un opérateur depuis la Terre, a alors entamé un périple en utilisant une batterie d'instruments embarqués pour analyser les roches les plus intéressantes :
          Chaque rover pèse environ 185 kg et se déplace sur six roues mues par l'énergie électrique fournie par des panneaux solaires. Il est équipé de trois paires de caméras utilisées pour la navigation et de plusieurs instruments scientifiques : une caméra panoramique située sur un mât à 1,5 mètre de hauteur, un outil pour abraser la surface des roches porté par un bras articulé sur lequel se trouvent également un spectromètre à rayons X, un spectromètre Mössbauer et une caméra microscope. Enfin, un spectromètre infrarouge est utilisé pour l'analyse des roches et de l'atmosphère.
          La mission MER fait partie du programme d'exploration de Mars de la NASA et prend la suite de deux missions américaines sur le sol martien aux capacités scientifiques beaucoup plus limitées : le programme Viking de 1976 et Mars Pathfinder de 1997. Les objectifs scientifiques du programme ont été remplis avec la découverte par les deux robots de plusieurs formations rocheuses qui résultent probablement de l'action de l'eau dans le passé : billes d'hématite grise et silicates. Les robots ont également permis d'étudier les phénomènes météorologiques, d'observer des nuages et de caractériser les propriétés des couches de l'atmosphère martienne. Les deux véhicules MER conçus et gérés par le Jet Propulsion Laboratory ont largement dépassé les objectifs qui leur étaient fixés : parcourir 600 mètres et rester opérationnel durant 90 jours martiens. Spirit, désormais bloqué par le sable, a pu parcourir 7,7 kilomètres et a transmis ses dernières données scientifiques le 22 mars 2010. Opportunity, après une tempête de sable qui a recouvert ses panneaux solaires, est devenu injoignable et sa mission s'est officiellement terminée le 13 février 2019.
        </Text>
      </ScrollView>
    </View>

  );
}

const Exo5 = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text>FELICITATION</Text>
      </Pressable>
    </View>
  );
}

const tp = () => {
  return (
    /* From the tp.json file, display the information based */
    <View style={{ flex: 1, flexDirection: 'row', marginTop: 35 }}>
      <FlatList
        data={tpList}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Image source={{ uri: item.img }} style={styles.itemImg} />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDesc}>{item.desc}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  txt: {
    color: 'black',
    fontSize: 20,
    borderColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'justify'
  },
  roverStyle: {
    flex: 1,
    width: '70%',
    height: '70%',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'green',
    boxShadow: '0px 0px 10px #000',
    Height: '50',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    margin: 10,
  },
  itemDesc: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    margin: 10,
  },
  itemImg: {
    flex: 1,
    width: '75%',
    height: '75%',
    margin: 10,
  },


});

export default Exo4;
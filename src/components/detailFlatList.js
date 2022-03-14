import React from 'react'
import {PresenceTransition, Pressable, Box, Text, FlatList} from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {styles} from '../styles/detailFlatListStyle'

function DetailPresenceTransition({isOpen, timeDetails}) {
  return (
    <PresenceTransition
      visible={isOpen}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 250,
        },
      }}>
      <Box>
        <FlatList
          data={timeDetails}
          renderItem={({item}) => (
            <Box style={styles.RowItem}>
              <Pressable>
                <Text>{item.title}</Text>
              </Pressable>
              <Text>{item.duration}</Text>
            </Box>
          )}
        />
      </Box>
    </PresenceTransition>
  )
}

export function DetailFlatList({items, onOpenSheet}) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box>
      <FlatList
        data={items.time_entries}
        renderItem={({item}) => (
          <Box>
            <Box style={styles.RowItem}>
              <Box style={styles.leftRow}>
                {item.time_entries.length > 1 ? (
                  <Pressable
                    borderColor={isOpen ? 'danger.600' : 'success.600'}
                    style={styles.PressableItem}
                    onPress={() => setIsOpen(!isOpen)}>
                    <Text>{item.time_entries.length}</Text>
                  </Pressable>
                ) : null}
                <Text>{item.title}</Text>
              </Box>
              <Box style={styles.rightRow}>
                <Pressable
                  borderColor={isOpen ? 'danger.600' : 'success.600'}
                  onPress={onOpenSheet}>
                  <Ionicon
                    name="ellipsis-vertical-circle-outline"
                    color="#525252"
                    size={28}
                  />
                </Pressable>
                {/* {item.total_tracked_time} */}
              </Box>
            </Box>
            <Box>
              {isOpen && item.time_entries.length > 1 ? (
                <DetailPresenceTransition
                  isOpen={isOpen}
                  timeDetails={item.time_entries}
                />
              ) : null}
            </Box>
          </Box>
        )}
      />
    </Box>
  )
}

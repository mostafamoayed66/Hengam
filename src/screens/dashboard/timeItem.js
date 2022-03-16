import React, {useState} from 'react'
import {
  View,
  PresenceTransition,
  Pressable,
  Box,
  Text,
  FlatList,
  HStack,
  VStack,
  Divider,
} from 'native-base'
import dayjs from 'dayjs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {durationFormat} from '../../utils/durationFormat'
import {styles} from './style'

function TimeItemInner({onOpen, time, title, count, onOpenSheet}) {
  return (
    <View>
      <HStack style={styles.RowItem}>
        <VStack style={styles.leftRow}>
          {count > 1 ? (
            <Pressable style={styles.PressableItem} onPress={onOpen}>
              <Text>{count}</Text>
            </Pressable>
          ) : null}
          <Text>{title}</Text>
        </VStack>
        <VStack style={styles.rightRow}>
          <Pressable onPress={onOpenSheet} px="3">
            <Ionicon name="play" color="#525252" size={28} />
          </Pressable>
          <Pressable onPress={onOpenSheet}>
            <Ionicon name="ellipsis-vertical" color="#525252" size={28} />
          </Pressable>
        </VStack>
      </HStack>
      <HStack style={styles.RowItem}>
        <VStack>
          <Text>
            {durationFormat(time.duration)} {'  '}
            {dayjs(time.start * 1000).format('HH:mm')} -{' '}
            {dayjs(time.end * 1000).format('HH:mm')}
          </Text>
        </VStack>
        <VStack>
          <Text>{durationFormat(time.duration)}</Text>
        </VStack>
      </HStack>
      <Divider />
    </View>
  )
}

function TimeItem({times, onOpenSheet}) {
  const [open, setOpen] = useState(false)
  return (
    <Box>
      <FlatList
        data={times}
        renderItem={({item}) => (
          <Box>
            <TimeItemInner
              onOpen={() => setOpen(!open)}
              time={{
                start: item.time_entries[item.time_entries.length - 1].start,
                end: item.time_entries[0].end,
                duration: dayjs.duration(item.total_tracked_time, 'second'),
              }}
              title={item.title}
              count={item.time_entries.length}
              onOpenSheet={onOpenSheet}
            />
            <Box>
              {open && item.time_entries.length > 1 ? (
                <PresenceTransition
                  visible={open}
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
                      data={item.time_entries}
                      renderItem={({item}) => (
                        <TimeItemInner
                          onOpen={() => setOpen(!open)}
                          time={{
                            start: item.start,
                            end: item.end,
                            duration: dayjs.duration(item.duration, 'second'),
                          }}
                          title={item.title}
                          count={1}
                          onOpenSheet={onOpenSheet}
                        />
                      )}
                    />
                  </Box>
                </PresenceTransition>
              ) : null}
            </Box>
          </Box>
        )}
      />
    </Box>
  )
}

export default TimeItem

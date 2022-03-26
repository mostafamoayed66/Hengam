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
} from 'native-base'
import dayjs from 'dayjs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import {durationFormat} from '../../utils/durationFormat'
import getStyleSheet, {baseStyles} from './style'

function TimeItemInner({onOpen, time, title, count, onOpenSheet, isDark}) {
  const theme = getStyleSheet(isDark)
  return (
    <View>
      <HStack style={baseStyles.rowItem}>
        <VStack style={baseStyles.leftRow}>
          {count > 1 ? (
            <Pressable style={baseStyles.pressableItem} onPress={onOpen}>
              <Text style={theme.text}>{count}</Text>
            </Pressable>
          ) : null}
          <Text style={theme.text}>{title}</Text>
        </VStack>
        <VStack style={baseStyles.rightRow}>
          <Pressable px="3">
            <Ionicon name="play" style={theme.iconEdit} />
          </Pressable>
          <Pressable onPress={onOpenSheet}>
            <Ionicon name="ellipsis-vertical" style={theme.iconEdit} />
          </Pressable>
        </VStack>
      </HStack>
      <HStack style={baseStyles.rowItem}>
        <VStack>
          <Text style={theme.text}>
            {durationFormat(time.duration)} {'  '}
            {dayjs(time.start * 1000).format('HH:mm')} -{' '}
            {dayjs(time.end * 1000).format('HH:mm')}
          </Text>
        </VStack>
        <VStack>
          <Text style={theme.text}>{durationFormat(time.duration)}</Text>
        </VStack>
      </HStack>
    </View>
  )
}

function TimeItem({times, onOpenSheet, isDark}) {
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
              isDark={isDark}
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
                          isDark={isDark}
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

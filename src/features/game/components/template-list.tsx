import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import { Text, StyleSheet, Pressable, View, ScrollView } from 'react-native'

import { range } from '~/features/game/utils/range'
import { useGameSelector } from '~/store/redux'
import { getCurrentTemplateList } from '~/store/slices/task.slice'

export function TemplateList({ stage }: PropsWithChildren<{ stage: string }>) {
  const levels = range(1, 18)
  const currentTemplateList = useGameSelector(getCurrentTemplateList)

  return (
    <ScrollView>
      {currentTemplateList.map((template, idx) => {
        return (
          <View key={template}>
            <View>
              <Text style={styles.template}>Template: {template}</Text>
            </View>
            <View>
              {levels.map((level) => {
                return (
                  <Link
                    key={level}
                    asChild
                    href={{
                      pathname: `/adventure-mode/[stage]/[template]/[lvl]`,
                      params: { lvl: level, stage, template: idx },
                    }}
                  >
                    <Pressable style={styles.button}>
                      <Text style={styles.text}>{level}</Text>
                    </Pressable>
                  </Link>
                )
              })}
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 2,
    padding: 10,
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
  },
  template: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
  },
})

import { useLocalSearchParams } from 'expo-router'

import { Link, Stack } from 'expo-router'
import { PropsWithChildren, useEffect } from 'react'
import { Text, StyleSheet, Pressable, View, ScrollView, ActivityIndicator } from 'react-native'

import { range } from '~/features/game/utils/range'
import { Background } from '~/layout/Background'
import { Paper } from '~/layout/Paper'
import { useGameSelector, useGameDispatch } from '~/store/redux'
import { getCurrentTemplateList, getStageLoading, registerStage } from '~/store/slices/task.slice'

function Stage({ stage }: PropsWithChildren<{ stage: string }>) {
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

export default function StageScreen() {
  const { stage = '1' } = useLocalSearchParams<{ stage: string }>()
  const stageLoading = useGameSelector(getStageLoading)
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(registerStage(Number(stage)))
  }, [dispatch, stage])

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Adventure: stage ${stage}` }} />
      <Background>
        <Paper>{stageLoading ? <ActivityIndicator size="large" /> : <Stage stage={stage} />}</Paper>
      </Background>
    </>
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

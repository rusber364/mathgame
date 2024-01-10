import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { useGameSelector } from '~/store/redux'
import { getCurrentTemplateList } from '~/store/slices/task.slice'

type Props = {
  levels: number[]
  stage: string
}

export function TemplateList({ stage, levels }: PropsWithChildren<Props>) {
  const currentTemplateList = useGameSelector(getCurrentTemplateList)

  return (
    <FlatList
      data={currentTemplateList}
      renderItem={(template) => (
        <View key={template.item}>
          <View>
            <Text style={styles.template}>
              Stage {stage}: {template.item}
            </Text>
          </View>
          <View style={styles.container}>
            {levels.map((level) => (
              <Link
                key={level}
                asChild
                href={{
                  pathname: `/(game)/adventure-mode/[stage]/[template]/[lvl]`,
                  params: { lvl: level, stage, template: template.index },
                }}
              >
                <Pressable style={styles.button}>
                  <Text style={styles.text}>{level}</Text>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9f6',
    borderRadius: 50,
    borderWidth: 1,
    flexBasis: '30%',
    flexGrow: 1,
    margin: 2,
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  template: {
    backgroundColor: '#f99',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

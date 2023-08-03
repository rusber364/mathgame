import { Link } from 'expo-router'
import { PropsWithChildren } from 'react'
import { Text, StyleSheet, Pressable, View, FlatList } from 'react-native'
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
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  button: {
    flexBasis: '30%',
    margin: 2,
    padding: 10,
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#9f6',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  template: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    backgroundColor: '#f99',
  },
})

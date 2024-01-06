import { SectionList, StyleSheet, Text, View } from 'react-native'

export default function KnowledgeScreen() {
  const Knowledges = [
    {
      title: 'Addition',
      data: [
        {
          id: 'Definition',
          definition:
            ' Addition is bringing two or more digits (figures, numbers or things) together to make a new total.',
        },
        {
          id: 'Description',
          description:
            '1+1=2, 20+29=49, 30+10=40, //where 1, 20, 30, 29, 10 these is digits whit that we do operation Addition, + is the symbol Plus that shows to us what kind of operation we do,// = is the symbol Equals that shows to us result (SUM) of operation that we have done.',
        },
        { id: 'Examples', examples: '3' },
        {
          id: 'History',
          history: `'Addition (usually signified by the plus symbol +) is one of the four basic operations of arithmetic, the other three being subtraction, multiplication and division. The addition of two whole numbers results in the total amount or sum of those values combined. The example in the adjacent image shows two columns of three apples and two apples each, totaling at five apples. This observation is equivalent to the mathematical expression "3 + 2 = 5" (that is, "3 plus 2 is equal to 5"). 
Besides counting items, addition can also be defined and executed without referring to concrete objects, using abstractions called numbers instead, such as integers, real numbers and complex numbers.Addition belongs to arithmetic, a branch of mathematics.In algebra, another area of mathematics, addition can also be performed on abstract objects such as vectors, matrices, subspaces and subgroups.
        
Addition has several important properties.It is commutative, meaning that the order of the operands does not matter, and it is associative, meaning that when one adds more than two numbers, the order in which addition is performed does not matter.Repeated addition of 1 is the same as counting(see Successor function).Addition of 0 does not change a number.Addition also obeys predictable rules concerning related operations such as subtraction and multiplication.
        
Performing addition is one of the simplest numerical tasks to do.Addition of very small numbers is accessible to toddlers; the most basic task, 1 + 1, can be performed by infants as young as five months, and even some members of other animal species.In primary education, students are taught to add numbers in the decimal system, starting with single digits and progressively tackling more difficult problems.Mechanical aids range from the ancient abacus to the modern computer, where research on the most efficient implementations of addition continues to this day.`,
        },
      ],
    },
    {
      title: 'Minus',
      data: [
        {
          id: 'Definition',
          definition:
            ' Addition is bringing two or more digits (figures, numbers or things) together to make a new total.',
        },
        { id: 'Description', description: '2' },
        { id: 'Examples', examples: '3' },
        { id: 'History', history: '4' },
      ],
    },
    {
      title: 'Division',
      data: [
        {
          id: 'Definition',
          definition:
            ' Addition is bringing two or more digits (figures, numbers or things) together to make a new total.',
        },
        { id: 'Description', description: '2' },
        { id: 'Examples', examples: '3' },
        { id: 'History', history: '4' },
      ],
    },
    {
      title: 'Multiplication',
      data: [
        {
          id: 'Definition',
          definition:
            ' Addition is bringing two or more digits (figures, numbers or things) together to make a new total.',
        },
        { id: 'Description', description: '2' },
        { id: 'Examples', examples: '3' },
        { id: 'History', history: '4' },
      ],
    },
  ]
  return (
    <>
      <View style={styles.container0}>
        <SectionList
          sections={Knowledges}
          keyExtractor={(item) => item.id.toString()}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.container1}>
              <Text style={styles.text0}>{title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={styles.container2}>
              <Text style={styles.text1}>{item.id}</Text>
              <Text style={styles.text2}>{item.definition}</Text>
              <Text style={styles.text2}>{item.description}</Text>
              <Text style={styles.text2}>{item.examples}</Text>
              <Text style={styles.text2}>{item.history}</Text>
            </View>
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container0: {
    margin: 5,
    width: 'auto',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  container1: {
    margin: 5,
    width: 'auto',
    height: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CCb',
    borderStyle: 'dashed',
    borderWidth: 5,
    borderColor: 'grey',
    borderRadius: 20,
  },
  container2: {
    margin: 5,
    width: 'auto',
    height: 'auto',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CCC',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: ' black',
    borderRadius: 20,
  },
  text0: {
    fontSize: 16,
    fontWeight: '800',
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
  },
  text2: {
    fontSize: 13,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
})

import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function PurchaseScreen() {
  return (
    <View style={style.conteiner}>
      <Text style={{ alignSelf: 'center' }}>Purchase/Subscription</Text>

      <View style={style.section}>
        <TouchableOpacity style={style.touch}>
          <View style={style.subscription}>
            <Text>1 Month</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.touch}>
          <View style={style.subscription}>
            <Text>2 Month</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={style.section}>
        <TouchableOpacity style={style.touch}>
          <View style={style.subscription}>
            <Text>1 year</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={style.section}>
        <TouchableOpacity style={style.touch}>
          <View style={style.subscription}>
            <Text>6 Month</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.touch}>
          <View style={style.subscription}>
            <Text>3 Month</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  conteiner: {
    backgroundColor: 'rgba(100, 178, 50, 0.2)',
    height: '100%',
    marginBottom: '5%',
    marginTop: '5%',
    width: '100%',
  },
  section: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
    justifyContent: 'center',
    marginBottom: '2.5%',
    marginTop: '2.5%',
    width: '100%',
  },
  subscription: {
    backgroundColor: 'rgba(100, 278, 0, 0.2)',
    height: '50%',
    width: '100%',
    ...Platform.select({
      web: {
        clipPath: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '50%',
  },
})

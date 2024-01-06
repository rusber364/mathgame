import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
  touch: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  conteiner: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(100, 178, 50, 0.2)',
    marginTop: '5%',
    marginBottom: '5%',
  },
  subscription: {
    width: '100%',
    height: '50%',
    backgroundColor: 'rgba(100, 278, 0, 0.2)',
    clipPath: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})

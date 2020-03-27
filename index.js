
import React,{Component} from 'react';
import {
    PickerIOS,
    StyleSheet,
    View,
    Text,
    Picker,
    Dimensions,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Modal from 'react-native-modalbox';
import wordAddress from './worldRegion'
import address from './address'
const PickerItemIOS = PickerIOS.Item;
import {PropTypes} from 'prop-types'
const {width} = Dimensions.get('window')
export default class  RNEasyAddressPicker extends Component{
    constructor(props) {
        super(props);
        this.tabsNames = this.props.hasCountry?['国家','省','市']:['省','市','区']
        this.word = wordAddress()
        this.add = address()
        this.state = {
            pickerData: this.props.hasCountry ? this.word : this.add,
            country:"",
            countryId: 0,
            province: '',
            provinceId: 0,
            city: '',
            cityId: 0,
            wordData: {'country': '中国',
                'countryId': 0,
                'province': '北京',
                'provinceId': 0,
                'city': '东城',
                'cityId': 0},
            chinaData: {
                province: '上海',
                provinceId: 0,
                city: '市辖区',
                cityId: 0,
                region:'黄浦区',
                regionId: 0
            }
        }
    }
    static propTypes = {
        hasCountry: PropTypes.bool,
        confirmBtnColor: PropTypes.string,
        confirmBtnText: PropTypes.string,
        cancleBtnColor: PropTypes.string,
        backdropColor: PropTypes.string,
        selectCountry: PropTypes.func,
        selectCity: PropTypes.func,
        selectProvince: PropTypes.func,
        selectRegion: PropTypes.func,
        clickConfirmBtn: PropTypes.func,
        isRadius: PropTypes.bool,
        title: PropTypes.string,
    }
    static defaultProps = {
        hasCountry: false,
        confirmBtnColor: '#14c5ca',
        confirmBtnText: '确定',
        cancleBtnColor:'#999',
        backdropColor: 'rgba(0,0,0,.3)',
        selectCountry: () => {},
        selectCity: () => {},
        selectProvince: () => {},
        selectRegion:() => {},
        clickConfirmBtn: () => {},
        isRadius: true,
        title: '选择地区'
    }
    onClose(){

    }
    onOpen(){

    }
    onClosingState(){

    }
    showPicker(){
        this.refs.picker.open()
    }
    closePicker() {
        this.refs.picker.close()
    }
    clickConfirm(){
        this.closePicker();
        const {hasCountry} = this.props
        this.props.clickConfirmBtn(hasCountry?this.state.wordData:this.state.chinaData)
    }
    _changeVal(data){
        if(this.props.hasCountry) {
            const {country,countryId,province,provinceId,city,cityId} = data;
            let aData = {
                'country': country,
                'countryId': countryId,
                'province': province,
                'provinceId': provinceId,
                'city': city,
                'cityId': cityId
            }
            this.setState({
                wordData: aData
            })
        } else {
            const {province,provinceId,city,cityId, region, regionId} = data;
            let aData = {
                'province': province,
                'provinceId': provinceId,
                'city': city,
                'cityId': cityId,
                'region': region,
                'regionId': regionId
            }
            this.setState({
                chinaData: aData
            })
        }

    }
    render(){
        const {backdropColor, isRadius, title} = this.props
        return <View style={{flex: 1}}>
    <Modal
        style={{height:240,width:width,backgroundColor:'rgba(0,0,0,0)'}}
        ref={"picker"}
        animationDuration={200}
        position={"bottom"}
        backdropColor={backdropColor}
        swipeToClose={false}
        entry={'bottom'}
        onClosed={this.onClose}
        onOpened={this.onOpen}
        backdropPressToClose={false}
        coverScreen={true}
        onClosingState={this.onClosingState}>
            <View style={[{
                    width:'100%',
                    height:240,
                    backgroundColor:'#fff',
                    borderTopRightRadius: isRadius?5:0,
                    borderTopLeftRadius: isRadius?5:0
                }]}>
            <View style={{
                height:40,
                justifyContent:'center',
                alignItems:'center'
        }}>
    <View style={[styles.commonWidth,styles.spaceRow]}>
    <TouchableOpacity style={[styles.center,{height: 40}]}
        onPress={() => this.closePicker()}
    >
    <Text style={{
            color:this.props.cancleBtnColor,
                fontSize: 16
        }}>取消</Text>
        </TouchableOpacity>
        <Text style={styles.pickerTitle}>{title}</Text>
            <TouchableOpacity style={[styles.center,{height: 40}]}
        onPress={() =>{this.clickConfirm()}}
    >
    <Text style={[styles.confimBtnStyle,{
            color:this.props.confirmBtnColor,
        }]}>{this.props.confirmBtnText}</Text>
        </TouchableOpacity>

        </View>
        </View>
        <PickerContent
        selectCountry={(index) => {this.props.selectCountry(index)}}
        selectCity={(index) => this.props.selectCity(index)}
        selectProvince={(index)=>this.props.selectProvince(index)}
        selectRegion={(index) => {this.props.selectRegion(index)}}
        changeVal={(data) => this._changeVal(data)}
        {...this.props}
        {...this.state}
        tabsNames={this.tabsNames}/>
        </View>
        </Modal>

        </View>
    }
}
const styles = StyleSheet.create({
    confimBtnStyle:{
        fontWeight:'bold',
        fontSize: 16
    },
    pickerTitle:{
        fontSize: 16,
        fontWeight: "bold",
        color:'#333'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleCon:{
        height:30,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    titleTxt:{
        color:'#333',
        fontWeight:'bold'
    },
    commonWidth:{
        width: width*0.94
    },
    spaceRow:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row'
    },
    flexStart:{
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'row'
    }
})
class PickerContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            country:"中国",
            countryId: 0,
            province: this.props.hasCountry?'北京':'上海',
            provinceId: 0,
            city:  this.props.hasCountry?'东城':'市辖区',
            cityId: 0,
            region:'黄浦区',
            regionId: 0
        }
    }
    selectCountry(val, position, index){
        const {pickerData} = this.props;
        if(this.props.hasCountry) {
            if(index === 0) {
                this.setState({
                    country: val,
                    countryId: position,
                    province: pickerData[0]['Location']['CountryRegion'][position]['State'] && pickerData[0]['Location']['CountryRegion'][position]['State'] instanceof Array ?
                        pickerData[0]['Location']['CountryRegion'][position]['State'][0]['-Name'] : '',
                    provinceId: 0,
                    city: !pickerData[0]['Location']['CountryRegion'][position]['State']?'':
                        pickerData[0]['Location']['CountryRegion'][position]['State'] instanceof Array
                            ?pickerData[0]['Location']['CountryRegion'][position]['State'][0]['City'][0]['-Name']:
                            pickerData[0]['Location']['CountryRegion'][position]['State']['City'][0]['-Name'],
                    cityId: 0,
                },() => {
                    this.props.selectCountry(position);
                    this.props.changeVal({...this.state})
                })

            } else if(index === 1) {
                const {countryId} = this.state
                this.setState({
                    province: val,
                    provinceId: position,
                    city: !pickerData[0]['Location']['CountryRegion'][countryId]['State']?'':
                        pickerData[0]['Location']['CountryRegion'][countryId]['State'] instanceof Array
                            ?pickerData[0]['Location']['CountryRegion'][countryId]['State'][position]['City'][0]['-Name']:
                            pickerData[0]['Location']['CountryRegion'][countryId]['State']['City'][0]['-Name'],
                    cityId: 0,
                },() => {
                    this.props.selectProvince(position);
                    this.props.changeVal({...this.state})
                })

            } else if(index === 2){
                this.setState({
                    city: val,
                    cityId: position,
                },() => {
                    this.props.selectCity(position);
                    this.props.changeVal({...this.state})
                })

            }
        }else{
            if(index === 0) {
                this.setState({
                    province: val,
                    provinceId: position,
                    city: pickerData[position].cityList[0].name,
                    cityId: 0
                },() => {
                    this.props.selectProvince(position);
                    this.props.changeVal({...this.state})
                })
            }else if(index === 1){
                this.setState({
                    city: val,
                    cityId: position,
                    region: pickerData[this.state.provinceId].cityList[position].areaList[0],
                    regionId: 0
                }, () => {
                    this.props.selectCity(position);
                    this.props.changeVal({...this.state})
                })
            }else{
                this.setState({
                    region: val,
                    regionId: position
                }, () => {
                    this.props.selectRegion(position);
                    this.props.changeVal({...this.state})
                })
            }
        }


    }
    render(){
        const {tabsNames, pickerData, hasCountry} = this.props;
        const {countryId, provinceId, cityId} = this.state
        return(
            <View style={[styles.flexStart,{height: 200}]}>
        {
            tabsNames.map((item, index) => {
                return <PickerIOS
                key={index}
                style={{
                    width:width/3,
                        height:200
                }}
                selectedValue={
                    hasCountry
                    ?
                    index===0
                        ?
                        this.state.country
                        :
                        index===1
                            ?
                            this.state.province
                            :
                            this.state.city
                    :
                    index===0
                        ?
                        this.state.province
                        :
                        index===1
                            ?
                            this.state.city
                            :
                            this.state.region

            }
                onValueChange={(val, position) => this.selectCountry(val, position, index)}>
                {
                    hasCountry
                        ?
                        index === 0
                            ?
                            pickerData[0]['Location']['CountryRegion'].map((item, index) => {
                                return <PickerItemIOS key={index} label={item['-Name']} value={item['-Name']} />
                            })
                            :
                            index === 1
                                ?
                                pickerData[0]['Location']['CountryRegion'][countryId]['State'] && pickerData[0]['Location']['CountryRegion'][countryId]['State'] instanceof Array
                                    ?
                                    pickerData[0]['Location']['CountryRegion'][countryId]['State'].map((item, index) => {
                                        return <PickerItemIOS key={index} label={item['-Name']?item['-Name']:''} value={item['-Name']?item['-Name']:''} />
                                    })
                                    :
                                    null
                                :
                                index === 2
                                    ?
                                    !pickerData[0]['Location']['CountryRegion'][countryId]['State']
                                        ?
                                        null
                                        :
                                        pickerData[0]['Location']['CountryRegion'][countryId]['State'] instanceof Array
                                            ?
                                            pickerData[0]['Location']['CountryRegion'][countryId]['State'][provinceId]['City']
                                                ?
                                                pickerData[0]['Location']['CountryRegion'][countryId]['State'][provinceId]['City'].map((item, index) => {
                                                    return <PickerItemIOS key={index} label={item['-Name']?item['-Name']:''} value={item['-Name']?item['-Name']:''} />
                                                })
                                                :
                                                null
                                            :
                                            pickerData[0]['Location']['CountryRegion'][countryId]['State']['City']
                                                ?
                                                pickerData[0]['Location']['CountryRegion'][countryId]['State']['City'].map((item, index) => {
                                                    return <PickerItemIOS key={index} label={item['-Name']?item['-Name']:''} value={item['-Name']?item['-Name']:''} />
                                                })
                                                :
                                                null
                                    :
                                    null

                        :
                        index === 0
                            ?
                            pickerData.map((item, index) => {
                                return <PickerItemIOS key={index} label={item['name']?item['name']:""} value={item['name']?item['name']:""} />
                            })
                            :
                            index === 1
                                ?
                                pickerData[provinceId].cityList.map((item, index) => {
                                    return <PickerItemIOS key={index} label={item['name']?item['name']:""} value={item['name']?item['name']:""} />
                                })
                                :
                                pickerData[provinceId].cityList[cityId].areaList.map((item, index) => {
                                    return <PickerItemIOS key={index} label={item} value={item} />
                                })

                }
            </PickerIOS>
            })
        }
    </View>
    )
    }
}


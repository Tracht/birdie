import * as React from 'react';
import { RootState } from '@App/store/reducers/reducerIndex';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Styles 
import { TableWrapper, Table, TableRow, TableHeader, TableDetail } from '../TableStyle';
// Utils
import { sortObjByProperty } from '../../utils';

class MoodData {
  mood: string;
  note: string | null;
  utcDate: string;
  utcTime: string;
  constructor(mood: string, note: string | null, utcDate: string, utcTime: string) {
    this.mood = mood;
    this.note = note;
    this.utcDate = utcDate; 
    this.utcTime = utcTime;
  }
}

var newData = [
  new MoodData('/', null, '2019-05-12', '04:20'), 
  new MoodData('happy', 'smiling a lot', '2019-05-12', '10:20'), 
  new MoodData('good', 'looked in a good state', '2019-05-12', '15:20'), 
];

// var data = [
//   {"mood":"\"happy\"","note":null,"utcDate":"2019-05-12","utcTime":"04:20"}
// ]

// // Typescript declarations 
// interface MoodProps {
// }
// interface MoodState {
// }

// Create the Dasboard Component
// class Mood extends React.Component<MoodProps, MoodState> {

class Mood extends React.Component {
  // constructor(props: MoodProps) {
  //   super(props);
  // }

  render() {
    return(
      <div>
          <TableWrapper>
            <Table>
              <TableHeader>Mood</TableHeader>
              <TableHeader>Notes</TableHeader>
              <TableHeader>Time</TableHeader>
              { newData.sort(sortObjByProperty('utcTime')).map( (element, index) => {
                return (
                <TableRow key={index}>
                  <TableDetail key={index}> {element.mood} </TableDetail>
                  <TableDetail key={index}> {element.note} </TableDetail>
                  <TableDetail key={index}> {element.utcTime} </TableDetail>
                </TableRow>
                );
              })
              }
            </Table>
          </TableWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, ownProps: object) => {};
const mapDispatchToProps = (dispatch: Dispatch<RootState>) => {};
export default connect(mapStateToProps, mapDispatchToProps)(Mood);
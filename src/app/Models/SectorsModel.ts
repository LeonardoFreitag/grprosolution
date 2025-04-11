import FarmModel from './FarmModel';
import PastureModel from './PastureModel';

export default interface SectorModel {
  id: string;
  customerId: string;
  farmId: string;
  farm: FarmModel;
  sectorName: string;
  pastures: PastureModel[];
}

import SectorModel from './SectorsModel';

export default interface FarmModel {
  id: string;
  customerId: string;
  farmName: string;
  sectors: SectorModel[];
}

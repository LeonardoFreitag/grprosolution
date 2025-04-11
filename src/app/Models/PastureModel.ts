import GrassModel from './GrassModel';
import SectorModel from './SectorsModel';
import TroughModel from './TroughModel';

export default interface PastureModel {
  id: string;
  customerId: string;
  sectorId: string;
  sector: SectorModel;
  pastureName: string;
  areaHectares: number;
  grassId?: string;
  grass?: GrassModel;
  pastureTrough: TroughModel[];
  mapUrl: string;
  mapFileName: string;
}

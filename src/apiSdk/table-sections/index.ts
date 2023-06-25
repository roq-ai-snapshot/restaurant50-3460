import axios from 'axios';
import queryString from 'query-string';
import { TableSectionInterface, TableSectionGetQueryInterface } from 'interfaces/table-section';
import { GetQueryInterface } from '../../interfaces';

export const getTableSections = async (query?: TableSectionGetQueryInterface) => {
  const response = await axios.get(`/api/table-sections${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createTableSection = async (tableSection: TableSectionInterface) => {
  const response = await axios.post('/api/table-sections', tableSection);
  return response.data;
};

export const updateTableSectionById = async (id: string, tableSection: TableSectionInterface) => {
  const response = await axios.put(`/api/table-sections/${id}`, tableSection);
  return response.data;
};

export const getTableSectionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/table-sections/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTableSectionById = async (id: string) => {
  const response = await axios.delete(`/api/table-sections/${id}`);
  return response.data;
};

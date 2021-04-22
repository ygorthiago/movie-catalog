function translateStatus(status: string) {
  switch (status) {
    case 'Released':
      return 'Lançado';
    case 'Planned':
      return 'Planejado';
    case 'In Production':
      return 'Em produção';
    case 'Rumored':
      return 'Rumores';
    case 'Canceled':
      return 'Cancelado';
    case 'Post Production':
      return 'Pós Produção';
    default:
      break;
  }
}

export default translateStatus;
function translateStatus(status: string) {
  switch (status) {
    case 'Released':
      return 'Lançado';
      break;
    case 'Planned':
      return 'Planejado';
      break;
    case 'In Production':
      return 'Em produção';
      break;
    case 'Rumored':
      return 'Rumores';
      break;
    case 'Canceled':
      return 'Cancelado';
      break;
    case 'Post Production':
      return 'Pós Produção';
      break;
  }
}

export default translateStatus;